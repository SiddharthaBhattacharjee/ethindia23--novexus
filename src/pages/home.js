import { MdOutlineQrCodeScanner } from "react-icons/md";
import AppNav from "../components/shared/nav";
import ActionCard from "../components/web/action-cards";
import BankIcon from "../components/icons/bank";
import ContactIcon from "../components/icons/contacts";
import TransferIcon from "../components/icons/transfer";
import HrLineStyled from "../components/shared/hr-styled";
import Card from "../components/shared/card";
import { AiFillBank, AiOutlineUserSwitch } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";

const AppHome = () => {
    return (
        <div>
            <AppNav />

            <div className="my-20 mx-10">
                {/* Hero section start */}
                <div className="grid grid-cols-4 gap-8 place-items-center">
                    <ActionCard
                        icon={<MdOutlineQrCodeScanner className="text-2xl" />}
                        title={'Bank Transfer'}
                        route={'/mobi-scanner'}
                    />
                    <ActionCard
                        icon={<AiFillBank className="text-2xl" />}
                        title={'Bank Transfer'}
                        route={''}
                    />
                    <ActionCard
                        icon={<TiContacts className="text-2xl" />}
                        title={'Bank Transfer'}
                        route={''}
                    />
                    <ActionCard
                        icon={<AiOutlineUserSwitch className="text-2xl" />}
                        title={'Bank Transfer'}
                        route={''}
                    />

                </div>
                {/* Hero section end */}


                {/* Account balance card start */}
                <div className="my-12 bg-[#483C56] px-4 py-3 rounded-xl font-[Inter]">
                    <h6 className="text-xs font-semibold">
                        Chain
                    </h6>
                    <div className="my-3">
                        <h1 className="text-4xl">50 ETH</h1>
                        <p className="text-xs my-2">$50,000</p>
                    </div>
                </div>
                {/* Account balance card end */}

                <div className="py-6">
                    <HrLineStyled />
                    <div className="my-12">
                        <div className="flex flex-col gap-4">
                            <Card text={'See transaction history'} />
                            <Card text={'Revolutionize Gifting with Lifafa'} />
                            <Card text={'Check Did Credibility'} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppHome;