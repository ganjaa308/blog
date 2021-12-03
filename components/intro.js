import { Image } from "react-bootstrap"
export default function Intro () {
    return(
    <div className="d-flex flex-row">
        <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="logo.jpg"
            alt="Generic placeholder"
        />
        <div>
        <h5 className="font-weight-bold mb-0">
            1234.mn - Онлайн видео сургалт
        </h5>
        <p className="welcome-text">
            Бид програмчлалыэн технологий чиглэлээр төрөл бүрийн
            сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
        </p>
        </div>
    </div>
    )
}