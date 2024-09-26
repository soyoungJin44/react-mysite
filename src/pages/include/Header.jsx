//import 라이브러리
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

//import 컴포넌트


//import css





const Header = () => {

    /* ---라우터 관련 ------ */

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [token, setToken] = useState(localStorage.getItem('token'));  //localStorage에있는 값 꺼내오기
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser'))); //localStorage에있는 값을(JSON형) => script객체로 꺼내기
    console.log(authUser);
        /* json형으로 들어있는 authUser의 값을 script객체로 변환해서 꺼내오기 */

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

        /* 로그아웃 해주기 (로컬스토리지에있는 token값 삭제 + authUser값 삭제) */
    const handleOut = (e)=>{
    
        localStorage.removeItem('token');
        localStorage.removeItem('authUser');
        
        /* 실제값은 변경되었지만, 화면에 버튼 다르게 표현해주기위해서  */
        setToken(null);
        setAuthUser(null);
    };


    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    return (
        <>
            <div id="header" className="clearfix">
                <h1>
                    <Link to="/main">MySite</Link>
                </h1>

                {
                    (token != null) ? (
                    <ul>
                        <li>{authUser.name} 님 안녕하세요^^</li>
                        <li><button className="btn_s" onClick={handleOut}>로그아웃</button></li>
                        <li><Link to="/user/modifyForm" className="btn_s">회원정보수정</Link></li>
                    </ul>
                    ):(
                    <ul>
                        <li><Link to="/user/loginForm" className="btn_s">로그인</Link></li>
                        <li><Link to="/user/joinForm" className="btn_s">회원가입</Link></li>
                    </ul>
                    )
                }
                    
            </div>
                <div id="nav">
                    <ul className="clearfix">
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><Link to="">갤러리</Link></li>
                        <li><Link to="">방명록</Link></li>
                    </ul>
                </div>
        </>
    );
}

export default Header  ;
