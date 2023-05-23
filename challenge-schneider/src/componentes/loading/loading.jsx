import './loading.css'

export default function Loading() {
    return (
        <div className=' absolute w-full h-screen flex justify-center items-center '>
            <div className=" lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}