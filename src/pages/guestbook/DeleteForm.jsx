//import 라이브러리
import React, {useState} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

import Header from '../include/Header';
import Footer from '../include/Footer';

//import 컴포넌트


//import css





const DeleteForm = () => {

    /* ---라우터 관련 ------ */
    const navigate = useNavigate();
    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [password, setPassword] = useState('');

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        console.log(password);
    };
    const {no} = useParams();

    const handleDel = (e)=>{
        e.preventDefault();
        console.log(no);
        axios({
            method: 'delete', 			// put, post, delete                   
            url: 'http://localhost:9000/api/guest/persons/'+no,
            //headers: { "Authorization": `Bearer ${token}`}, // token
                                                                                              //get delete
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            //headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            data: {password:password},     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);

            if(response.data.result === 'success'){
                alert('삭제되었습니다.');
                navigate('/guestbook/addList')
            }else{
                alert('비밀번호가 틀렸습니다.');
                setPassword('');
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
                    
                        <div id="content-head">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="guestbook">
                            <form action="" method="" onSubmit={handleDel}>
                                <table id="guestDelete">
                                    <colgroup>
                                        <col style={{ width: '10%'}} />
                                        <col style={{ width: '40%'}} />
                                        <col style={{ width: '25%'}} />
                                        <col style={{ width: '25%'}} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>비밀번호</td>
                                            <td><input type="password" name="pass" value={password} onChange={handlePassword}/></td>
                                            <td className="text-left"><button type="submit">삭제</button></td>
                                            <td><Link to="/">[메인으로 돌아가기]</Link></td>
                                        </tr>
                                    </tbody>    
                                </table>
                            </form>
                            
                        </div>
                    </div>

                </div>

                <Footer />

                </div>
        </>
    )
}

export default DeleteForm;
