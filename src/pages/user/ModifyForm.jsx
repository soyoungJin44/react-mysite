//import 라이브러리
import React, { useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../include/Header';
import Footer from '../include/Footer';

//import 컴포넌트


//import css





const ModifyForm = () => {

    /* ---라우터 관련 ------ */
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/

    //token꺼내기
    const token = localStorage.getItem('token');
    const authUser = localStorage.getItem('authUser');

    // const no = authUser.getItem(no);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    };
    const handleName = (e)=>{
        setName(e.target.value);
    };
    const handleGen = (e)=>{
        setGender(e.target.value);
    };

    const handleUpdate = (e)=>{
        e.preventDefault();

        const personVo = {
            password: password,
            name: name,
            gender: gender
        }
        console.log(personVo);

        axios({
            method: 'put', 			// put, post, delete                   
            url: 'http://localhost:9000/api/persons/me',
            headers: { "Authorization": `Bearer ${token}`,  // token
                        "Content-Type": "application/json; charset=utf-8" //personVo 데이터
            }, 
                                                                                              //get delete
            //headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            //headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            data: personVo,     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타

            if(response.data.result === 'success'){
                //리다이렉트 시키기 전에 authUser의 이름을 바꿔주기 (server에서 이름 보내주기)
                const authUser = response.data.apiData;
                localStorage.setItem('authUser', JSON.stringify(authUser));
                navigate('/');
            }else{
                alert("수정실패")
            }
        
        }).catch(error => {
            console.log(error);
        });
    };


    useEffect(()=>{

        axios({
            method: 'get', 			// put, post, delete                   
            url: 'http://localhost:9000/api/persons/me',
            headers: { "Authorization": `Bearer ${token}`}, // token
                                                                                              //get delete
            //headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            //headers: { "Content-Type": "multipart/form-data" }, //첨부파일
            
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            //data: guestbookVo,     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            
            const personVo = response.data.apiData;

            if(response.data.result === 'success'){
                setId(personVo.id);
                setPassword(personVo.password);
                setName(personVo.name);
                setGender(personVo.gender);
            }else{
                alert("확인해주세요");
            }
        
        }).catch(error => {
            console.log(error);
        });

    },[]);

    
    



    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    return (
        <>
            
            <div id="wrap">

                <Header />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>회원정보</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원정보</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
            
                        <div id="user">
                            <div id="modifyForm">
                                <form action="" method="" onSubmit={handleUpdate}>
            
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <span className="text-large bold">{id}</span>
                                    </div>
            
                                    <div className="form-group">
                                        <label class="form-text" htmlFor="input-pass">패스워드</label> 
                                        <input type="text" id="input-pass" name="" value={password} onChange={handlePassword}/>
                                    </div>
            
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label> 
                                        <input type="text" id="input-name" name="" value={name} onChange={handleName}/>
                                    </div>
            
                                    <div className="form-group">
                                        <span className="form-text">성별</span> 
                                        
                                        <label htmlFor="rdo-male">남</label> 
                                        <input type="radio" id="rdo-male" name="gender" value="남" checked={gender === '남'} onChange={handleGen}/> 
                                        
                                        <label htmlFor="rdo-female">여</label> 
                                        <input type="radio" id="rdo-female" name="gender" value="여" checked={gender === '여'} onChange={handleGen} /> 
            
                                    </div>
            
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원정보수정</button>
                                    </div>
                                    
                                </form>
                            
                            
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
                
            </div>



        </>
    );
}

export default ModifyForm;
