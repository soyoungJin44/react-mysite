//import 라이브러리
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import 컴포넌트


//import css





const ModifyForm = () => {

    /* ---라우터 관련 ------ */

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
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
    };


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
                        <li><Link to="" className="btn_s">회원가입</Link></li>
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
                                        <span className="text-large bold">userid</span>
                                    </div>
            
                                    <div className="form-group">
                                        <label class="form-text" htmlFor="input-pass">패스워드</label> 
                                        <input type="text" id="input-pass" name="" value={password} placeholder="비밀번호를 입력하세요"	onChange={handlePassword}/>
                                    </div>
            
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label> 
                                        <input type="text" id="input-name" name="" value={name} placeholder="이름을 입력하세요" onChange={handleName}/>
                                    </div>
            
                                    <div className="form-group">
                                        <span className="form-text">성별</span> 
                                        
                                        <label htmlFor="rdo-male">남</label> 
                                        <input type="radio" id="rdo-male" name="gender" value="남" onChange={handleGen}/> 
                                        
                                        <label htmlFor="rdo-female">여</label> 
                                        <input type="radio" id="rdo-female" name="gender" value="여" onChange={handleGen} /> 
            
                                    </div>
            
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원정보수정</button>
                                    </div>
                                    
                                </form>
                            
                            
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

export default ModifyForm;
