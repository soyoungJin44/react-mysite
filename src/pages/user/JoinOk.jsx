//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트


//import css





const JoinOk = () => {

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
                        <li><Link to="" className="btn_s">로그인</Link></li>
                        <li><Link to="" className="btn_s">회원가입</Link></li>
                    </ul>
                    
                </div>

                <div id="nav">
                    <ul class="clearfix">
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><Link to="">갤러리</Link></li>
                        <li><Link to="">방명록</Link></li>
                    </ul>
                </div>

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
                            <h3>회원가입</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원가입</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="user">
                            <div id="joinOK">
                            
                                <p className="text-large bold">
                                    회원가입을 축하합니다.<br />
                                    <br />
                                    <Link to="/user/loginForm" >[로그인하기]</Link>
                                </p>
                                    
                            </div>
                        </div>
                    </div>
                </div>


                <div id="footer">
                    Copyright ⓒ 2024 JJin. All right reserved
                </div>


                </div>
        </>
    );
}

export default JoinOk;
