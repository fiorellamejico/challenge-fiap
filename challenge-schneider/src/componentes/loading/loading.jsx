import './loading.css'

export default function Loading() {
    return (
        <div className=' h-screen flex justify-center items-center '>
        <div class=" lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}