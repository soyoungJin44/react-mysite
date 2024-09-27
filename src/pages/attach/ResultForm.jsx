//import 라이브러리
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
//import css





const ResultForm = () => {

    /* ---라우터 관련 ------ */
    const [SearchParams] = useSearchParams();
    const photo = SearchParams.get('saveName');
    console.log(photo);

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/



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
                            
                                <div>
                                    <img id="resultImg" src={`http://localhost:9000/upload/${photo}`} alt="" />
                                </div>
                                <p>
                                    <Link to="/attach/attachForm" id="btnUpload">다시 업로드 하기</Link>      
                                    {/* src 부분에 있는 경로의 사진을 줘. c드라이브에 있는 사진들에 주소를 만들어줘야한다.(가상으로 주소를 만들어서 만들어지게 세팅미리해둠. 매번 만들면 힘들어용) */}
                                </p>
                            
                        </div>

                    </div>

                </div>


                <Footer />
            </div>
        </>
    );
}

export default ResultForm;
