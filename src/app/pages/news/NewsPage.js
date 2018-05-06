import React, {Component} from "react";
import "./NewsPage.scss";
import ListPost from "./ListPost";

class NewsPage extends Component {

    render() {
        const data = [
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'Thông tin tuyển dụng kỹ sư Viễn thông – CNTT của Tập đoàn Viettel',
                description: 'Đóng ngay trong ngày hôm nay',
                link: './sdjkfh',
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'Lui thời hạn nộp học phí học kỳ II năm học 2017-2018 và các khoản nợ (nếu có) của sinh viên dự kiến được nhận HBKKHT',
                description: 'dfgddsdf',
                link: './sdjkfh'
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'Danh sách sinh viên đại học hệ chính quy khoa Công nghệ thông tin và khoa Vật lý kỹ thuật và Công nghệ Nanô bảo vệ khóa luận tốt nghiệp',
                description: 'dfgddsdf',
                link: './sdjkfh'
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                description: 'dfgddsdf',
                link: './sdjkfh'
            }
        ];

        return (
            <div className='HomePage'>
                <ListPost title="Tin mới" data={data} />
                <ListPost title="Tin đáng quan tâm" data={data} />
            </div>
        );
    }
}



export default NewsPage;