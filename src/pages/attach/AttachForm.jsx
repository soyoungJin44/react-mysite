//import 라이브러리
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트
import Header from '../include/Header'; 
import Footer from '../include/Footer';

//import css
import '../../css/Gallery.css';





const AttachForm = () => {

    /* ---라우터 관련 ------ */
    const navigate = useNavigate();

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [profileImg, setProfileImg] = useState([]);   //사진은 옵션으로 주면 여러개 선택 가능하기때문에, 기본적으로 배열로 관리한다.


    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePhoto = (e)=>{
        console.log('pailalskfhl')
        setProfileImg(e.target.files[0])   //value값이 아니고 files라는곳에서 담긴다.
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('yamyam')

        //문법임. 여기안에 담겨진다.
        const formData = new FormData();
        formData.append("profileImg",profileImg) //이름,데이타

        axios({
            method: 'post', 			// put, post, delete                   
            url: 'http://localhost:9000/api/attachs',
            
                                                                                              //get delete
            //headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            //params: guestbookVo, // get delete 쿼리스트링(파라미터)
            //data: guestbookVo,     // put, post,  JSON(자동변환됨)
            data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);

            //사진의 이름을 다음페이지로 옮겨줘야함
            const saveName = response.data.apiData;

            if(response.data.result === 'success'){     //이제 resultForm에 이미지가 들어가야한다.(img태그 src부분에 )
                alert("등록되었습니다.");
                navigate(`/attach/resultForm?saveName=${saveName}`);
            }else{
                alert('다시시도해주세요');
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
                        <h2>갤러리</h2>
                        <ul>
                            <li><Link to="">일반갤러리</Link></li>
                            <li><Link to="">파일첨부연습</Link></li>
                        </ul>
                    </div>

                    <div id="content">

                        <div id="content-head">
                            <h3>첨부파일연습</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>갤러리</li>
                                    <li className="last">첨부파일연습</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="file">
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <table>
                                    <colgroup>
                                        <col style={{width: '600px'}} />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td className="text-left" ><input type="text" name="content" value="" /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-left"><input type="file" name="file" onChange={handlePhoto} /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><button type="submit">파일업로드</button></td>
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
    );
}

export default AttachForm;
