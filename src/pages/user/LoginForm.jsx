//import 라이브러리
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../include/Header';
import Footer from '../include/Footer';

//import 컴포넌트


//import css
import '../../css/User.css';




const LoginForm = () => {

    /* ---라우터 관련 ------ */

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleId = (e)=>{
        setId(e.target.value);
    };
    const handlePw = (e)=>{
        setPassword(e.target.value);
    };
    const handleLogin = (e)=>{
        e.preventDefault();
        
        const personVo = {
            id: id,
            password: password
        }

        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/users/login',
        
                                                                                              //get delete
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            //headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            data: personVo,     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타

            // + json으로 형변환해주기
            // : JSON.stringify();

            if(response.data.result === 'success'){

                //1.헤더에서 토큰 꺼내기
                const token = response.headers['authorization'].split(' ')[1];    //token값앞에 Bearer이 붙어서 오기때문에 split으로 공백기준 짤라줄거임 
                console.log(token);

                //2.로컬스토리지에 토큰값 저장
                localStorage.setItem('token', token);
                localStorage.setItem('authUser',JSON.stringify(response.data.apiData));

                alert("로그인 성공")
                navigate('/')
            }else{
                alert("회원가입을 해주세요.")
                navigate('/user/joinForm')
            }
        
        }).catch(error => {
            console.log(error);
        });
        
    };


    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    return (
        <>
            <div id="wrap">

                <Header/>

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
                            <h3>로그인</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">로그인</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="user">
                            <div id="loginForm">
                                <form action="" method="post" onSubmit={handleLogin}>

                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <input type="text" id="input-uid" name="" value={id} placeholder="아이디를 입력하세요" onChange={handleId}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">비밀번호</label> 
                                        <input type="text" id="input-pass" name="" value={password} placeholder="비밀번호를 입력하세요"	onChange={handlePw}/>
                                    </div>

                                    
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">로그인</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <Footer/>


                </div>
        </>
    );
}

export default LoginForm;
