# Fluffy Unicorns - Week 8 - Caro Game

Bài tập tuần 8 môn Công nghệ phát triển phần mềm web  
Giảng viên: Trần Duy Quang  
Trường Đại học Quản lý và Công nghệ Thành phố Hồ Chí Minh (UMT)

## Thông tin nhóm

Tên nhóm: Fluffy Unicorns

### Thành viên nhóm

1. Nguyễn Ngọc Thạch - 2201700077
2. Hoàng Anh - 2201700173
3. Lê Đức Long - 2201700192

## Demo dự án

Bạn có thể truy cập dự án React tại đây: [https://suppleo.github.io/Fluffy-Unicorns---Caro-Game/](https://suppleo.github.io/Fluffy-Unicorns---Caro-Game/)

## Nội dung bài tập

Sử dụng tutorial Tic-tac-toe ở đây làm nền tảng: [Tutorial: Tic-Tac-Toe – React](https://react.dev/learn/tutorial-tic-tac-toe)

Viết chương trình chơi caro đơn giản với các yêu cầu mở rộng từ trò chơi trên:

+ Bàn cờ 20x20

+ Nếu có 5 quân liên tiếp theo chiều ngang, chiều dọc, đường chéo thì sẽ chiến thắng

+ Nếu đã đánh hết bàn cờ mà chưa có điều kiện thắng xuất hiện => Hòa.

## Cách cài đặt và chạy dự án

1. Clone repository về máy:
```bash
git clone <repository-url>
cd week08-caro
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy dự án:
```bash
npm start
```

4. Mở trình duyệt và truy cập `http://localhost:3000`

## Công nghệ sử dụng

- React.js
- Tailwind CSS

## Hướng dẫn chơi

1. Người chơi X đi trước
2. Click vào ô trống để đánh dấu
3. Thắng khi có 5 quân liên tiếp theo hàng ngang, dọc hoặc chéo
4. Hòa khi đánh hết bàn cờ mà không có người thắng
