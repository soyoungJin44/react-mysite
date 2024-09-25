//import 라이브러리
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트


//import css





const JoinForm = () => {

    /* ---라우터 관련 ------ */

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleId = (e)=>{
        setId(e.target.value);
    };
    const handlePw = (e)=>{
        setPassword(e.target.value);
    };

    const handleName = (e)=>{
        setName(e.target.value);
    };
    const handleSex = (e)=>{
        setGender(e.target.value);
    };

    const handleJoin = (e)=>{
        e.preventDefault();

        const personVo = {
            id: id,
            password: password,
            name: name,
            gender: gender
        }
        console.log(personVo);

        //전송
        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/persons',
        
                                                                                              //get delete
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            //headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            data: personVo,     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            if(response.data.apiData === 1){
                navigate('/user/joinOk');
            }else{
                alert("회원가입실패")
            }
        
        }).catch(error => {
            console.log(error);
        });
        

    };

    const handleCheck = (e)=>{
        

        if(!id){
            alert("아이디를 입력하세요");
            return;
        }
        
        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/personId',
        
                                                                                              //get delete
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            //headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            data: {id:id},     // put, post,  JSON(자동변환됨)
            //data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타

            if(response.data.message === '중복됨'){
                alert("사용할수없는 아이디입니다.");
            }else{
                alert("사용가능~~");
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

                <div id="header" className="clearfix">
                    <h1>
                        <Link to="/main">MySite</Link>
                    </h1>

                    <ul>
                        <li>JJin 님 안녕하세요^^</li>
                        <li><Link to="" className="btn_s">로그아웃</Link></li>
                        <li><Link to="/user/modifyForm" className="btn_s">회원정보수정</Link></li>
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
                            <div id="joinForm">
                                <form action="" method="" onSubmit={handleJoin}>

                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <input type="text" id="input-uid" name="" value={id} placeholder="아이디를 입력하세요" onChange={handleId} />
                                        <button type="button" id="" onClick={handleCheck}>중복체크</button>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label> 
                                        <input type="text" id="input-pass" name="" value={password} placeholder="비밀번호를 입력하세요"	onChange={handlePw}/>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label> 
                                        <input type="text" id="input-name" name="" value={name} placeholder="이름을 입력하세요" onChange={handleName} />
                                    </div>

                                    <div className="form-group">
                                        <span className="form-text">성별</span> 
                                        
                                        <label htmlFor="rdo-male">남</label>
                                        <input type="radio" id="rdo-male" name="sex" value="남" onChange={handleSex} /> 
                                        
                                        <label htmlFor="rdo-female">여</label>
                                        <input type="radio" id="rdo-female" name="sex" value="여" onChange={handleSex} /> 

                                    </div>

                                    <div className="form-group">
                                        <span className="form-text">약관동의</span>
                                        
                                        <input type="checkbox" id="chk-agree" value="" name="" />
                                        <label htmlFor="chk-agree">서비스 약관에 동의합니다.</label>
                                    </div>
                                    
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원가입</button>
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

export default JoinForm;
