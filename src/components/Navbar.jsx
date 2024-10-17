export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-yellow-200 shadow-md">
            <img src="" className="w-[50px] h-[50px]" alt="logo" />
            <div className="flex gap-5 px-5 py-2">
                <p>username</p>
                <p>avatar</p>
            </div>
        </nav>
    )
}