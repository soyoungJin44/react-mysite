//import 라이브러리
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header from '../include/Header';
import Footer from '../include/Footer';

//import 컴포넌트


//import css
import '../../css/Guestbook.css';
import '../../css/Mysite.css';





const AddList = () => {

    /* ---라우터 관련 ------ */
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [personList, setPersonList] = useState([]);
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');


    /*---일반 메소드 --------------------------------------------*/
    const getList = ()=>{
        axios({
            method: 'get', 			// put, post, delete                   
            url: 'http://localhost:9000/api/guest/persons',
            //headers: { "Authorization": `Bearer ${token}`}, // token
                                                                                              //get delete
            // headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            // headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            //data: guestbookVo,     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            setPersonList(response.data.apiData)
        
        }).catch(error => {
            console.log(error);
        });
        

    };

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleName = (e)=>{
        setName(e.target.value);
        console.log(name)
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        console.log(password)
    };
    const handleContent = (e)=>{
        setContent(e.target.value);
        console.log(content);
    };
    
    
    const handleSubmit = (e)=>{
        console.log("kk")
        e.preventDefault();

        const personVo = {
            name: name,
            password: password,
            content: content
        }
        
        
        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/guest/persons',
            //headers: { "Authorization": `Bearer ${token}`}, // token
                                                                                              //get delete
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            //headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            data: personVo,     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            if(response.data.result === 'success'){
                alert('등록되었습니다.');
                setName('');
                setPassword('');
                setContent('');
                
                getList();
            }}
        ).catch(error => {
            console.log(error);
        });
        

    };

    


    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)
    
    useEffect(()=>{
        getList();
    },[])


    return (
        <>
            <div id="wrap">

                <Header />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>방명록</h2>
                        <ul>
                            <li>일반방명록</li>
                            <li>ajax방명록</li>
                        </ul>
                    </div>

                    <div id="content">
                        
                        <div id="content-head" className="clearfix">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                        </div>

                        <div id="guestbook">
                            <form action="" method="" onSubmit={handleSubmit}>
                                <table id="guestAdd">
                                    <colgroup>
                                        <col style={{ width: '15%'}} />
                                        <col style={{ width: '35%'}}/>
                                        <col style={{ width: '15%'}} />
                                        <col style={{ width: '35%'}} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td><label className="form-text" htmlFor="input-uname" >이름</label></td>
                                            <td><input id="input-uname" type="text" name="name" value={name} onChange={handleName} /></td>
                                            <td><label className="form-text" htmlFor="input-pass">패스워드</label></td>
                                            <td><input id="input-pass"type="password" name="name" value={password} onChange={handlePassword} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4"><textarea name="content" cols="72" rows="5" value={content} onChange={handleContent}></textarea></td>
                                        </tr>
                                        <tr className="button-area">
                                            <td colSpan="4" className="text-center"><button type="submit">등록</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>	
                            
                            {personList.map((personVo)=>{
                                return (
                                    <table className="guestRead" key={personVo.no}>
                                        <colgroup>
                                            <col style={{ width: '10%'}} />
                                            <col style={{ width: '40%'}} />
                                            <col style={{ width: '40%'}} />
                                            <col style={{ width: '10%'}} />
                                            <col style={{ width: '50%'}} />
                                        </colgroup>

                                        <tbody>
                                            <tr>
                                                <td>{personVo.no}</td>
                                                <td>{personVo.name}</td>
                                                <td>{personVo.reg_date}</td>
                                                <td><Link to={`/guestbook/deleteForm/${personVo.no}`}>[삭제]</Link></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4} className="text-left">{personVo.content}</td>
                                            </tr>
                                        </tbody>
                            
                        
                                    </table>
                                )
                            })};
                        </div>
                    </div>
                </div>

                <Footer />

                </div>
        </>
    )
}

export default AddList;
