export default function popUp({ message, setWindowOpen, className }) {
    return (
        <div className={` ${className} my-4 border p-10 w-fit h-fit bg-neutral-100 text-neutral-600`}>
            {
                message &&
                message?.map((m, i) => {
                    return (
                        <>
                            <p key={i}>{m}</p>
                            <br />
                        </>
                    )
                })
            }
            <button onClick={() => setWindowOpen(false)} className=' w-24 bg-black text-white text-xl rounded-md mt-4'> Ok </button>
        </div>
    )
}