//import 라이브러리
import '../../css/Main.css';

import React from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트


//import css





const Main = () => {

    /* ---라우터 관련 ------ */

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/


    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/



    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    return (
        <>
            
            <div id="wrap">

                <div id="header" className="clearfix">
                    <h1>
                        <Link to="/main">MySite</Link>
                    </h1>

                    <ul>
                        <li>JJin 님 안녕하세요^^</li>
                        <li><Link to="" className="btn_s">로그아웃</Link></li>
                        <li><Link to="" className="btn_s">회원정보수정</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/user/loginForm" className="btn_s">로그인</Link></li>
                        <li><Link to="/user/JoinForm" className="btn_s">회원가입</Link></li>
                    </ul>
                    
                </div>

                <div id="nav">
                    <ul className="clearfix">
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><Link to="">갤러리</Link></li>
                        <li><Link to="">방명록</Link></li>
                    </ul>
                </div>


                <div id="container" className="clearfix">
                    <div id="full-content">
                    
                        <div id="main"> 
                        
                            <img id="profile-img" src="/images/jung.jpg" alt="유재석사진" />
                            
                            <div id="greetings">
                                <p class="text-xlarge" >
                                    <span class="bold" >안녕하세요!!<br />
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
                            
                            <div class="clear"></div>
                            
                        </div>
                        
                    </div>
                    

                </div>


                <div id="footer">
                    Copyright ⓒ 2020 JJin. All right reserved
                </div>

            </div>
        </>
    );
}

export default Main;
