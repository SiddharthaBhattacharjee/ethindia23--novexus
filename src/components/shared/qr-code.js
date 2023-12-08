import { QRCode } from "antd";

const QRCodeGen = ({ data }) => {
    return (
        <QRCode value={data} color="#8FFF00" bgColor="#100b1a" />
    )
}

export default QRCodeGen;