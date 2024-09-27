//import 라이브러리
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';

//import css
import '../../css/Board.css';




const List = () => {

    /* ---라우터 관련 ------ */

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [boardList, setBoardList] = useState([]);

    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const getList = ()=>{

        axios({
            method: 'get', 			// put, post, delete                   
            url: 'http://localhost:9000/api/board/persons',
            // headers: { "Authorization": `Bearer ${token}`}, // token
            //                                                                                   //get delete
            // headers: { "Content-Type": "application/json; charset=utf-8" },  // post put
            // headers: { "Content-Type": "multipart/form-data" }, //첨부파일
        
            // params: guestbookVo, // get delete 쿼리스트링(파라미터)
            // data: guestbookVo,     // put, post,  JSON(자동변환됨)
            // data: formData,           // 첨부파일  multipart방식
        
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            setBoardList(response.data.apiData);
        
        }).catch(error => {
            console.log(error);
        });
        
    };


    // 1.이벤트 잡기

    //2. 데이터 잡기 + 묶기(배열)

    //3. 전송 (ajax 사용)

    useEffect(()=>{
        getList();
    },[]);

    return (
        <>
            <div id="wrap">

                <Header />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>게시판</h2>
                        <ul>
                            <li><Link to="">일반게시판</Link></li>
                            <li><Link to="">댓글게시판</Link></li>
                        </ul>
                    </div>

                    <div id="content">

                        <div id="content-head">
                            <h3>일반게시판</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>게시판</li>
                                    <li className="last">일반게시판</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="board">
                            <div id="list">
                                <form action="" method="">
                                    <div className="form-group text-right">
                                        <input type="text" value="" />
                                        <button type="submit" id="btn_search">검색</button>
                                    </div>
                                </form>
                                <table >
                                    <thead>
                                        <tr>
                                            <th>번호</th>
                                            <th>제목</th>
                                            <th>글쓴이</th>
                                            <th>조회수</th>
                                            <th>작성일</th>
                                            <th>관리</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {boardList.map((boardVo)=>{
                                                return(
                                                    <tr>
                                                        <td>{boardVo.no}</td>
                                                        <td className="text-left"><Link to="#">{boardVo.content}</Link></td>
                                                        <td>{boardVo.name}</td>
                                                        <td>{boardVo.no}</td>
                                                        <td>{boardVo.reg_date}</td>
                                                        <td><Link to="">[삭제]</Link></td>
                                                    </tr>
                                                )
                                            })};
                                    </tbody>
                                </table>
                    
                                <div id="paging">
                                    <ul>
                                        <li><Link to="">◀</Link></li>
                                        <li><Link to="">1</Link></li>
                                        <li><Link to="">2</Link></li>
                                        <li><Link to="">3</Link></li>
                                        <li><Link to="">4</Link></li>
                                        <li className="active"><Link to="">5</Link></li>
                                        <li><Link to="">6</Link></li>
                                        <li><Link to="">7</Link></li>
                                        <li><Link to="">8</Link></li>
                                        <li><Link to="">9</Link></li>
                                        <li><Link to="">10</Link></li>
                                        <li><Link to="">▶</Link></li>
                                    </ul>
                                    
                                    
                                    <div className="clear"></div>
                                </div>
                                <Link to="" id="btn_write" >글쓰기</Link>
                            
                            </div>
                        </div>
                    </div>

                </div>


                <Footer />
            </div>
        </>
    );
}

export default List;
