//import 라이브러리

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Header from '../include/Header';
import Footer from '../include/Footer';

//import 컴포넌트


//import css
import '../../css/Main.css';




const Main = () => {

    /* ---라우터 관련 ------ */

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    //const navigate = useNavigate();


    /*---일반 메소드 --------------------------------------------*/
        /* token에서 값 꺼내오기 */
    //const token = localStorage.getItem('token')
    //console.log(token)

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
        


    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    return (
        <>
            
            <div id="wrap">
                
                <Header/>

                <div id="container" className="clearfix">
                    <div id="full-content">
                    
                        <div id="main"> 
                        
                            <img id="profile-img" src="/images/jung.jpg" alt="유재석사진" />
                            
                            <div id="greetings">
                                <p className="text-xlarge" >
                                    <span className="bold" >안녕하세요!!<br />
                                    JJin의 MySite에 오신 것을 환영합니다.<br />
                                    <br />
                                    이 사이트는 웹 프로그램밍 실습과제 예제 사이트입니다.<br />
                                    </span>
                                    <br />
                                    사이트 소개, 회원가입, 방명록, 게시판으로 구성되어 있으며<br />
                                    jsp&serlvet(모델2) 방식으로 제작되었습니다.<br />
                                    <br />
                                    자바 수업 + 데이터베이스 수업 + 웹프로그래밍 수업<br />
                                    배운 거 있는거 없는 거 다 합쳐서 만들어 놓은 사이트 입니다.<br />
                                    <br />
                                    (자유롭게 꾸며보세요!!)<br />
                                    <br /><br />
                                    <Link to="" className="" >[방명록에 글 남기기]</Link>
                                </p>	
                            </div>
                            
                            <div className="clear"></div>
                            
                        </div>
                        
                    </div>
                    

                </div>

                <Footer/>

            </div>
        </>
    );
}

export default Main;
