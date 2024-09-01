export const Buttons = () => {
    const buttonName = ["All", "ongoing", "upcoming", "recently closed"];
    return (
        <>
            {buttonName.map((name) => (
                <button 
                    key={name} 
                    className={`p-4 ${name.length > 3 ? 'w-44 px-0' : 'w-fit px-6'} text-lgi border border-secondary-5 duration-300
                        text-secondary-5 hover:bg-secondary-5 hover:text-timeless-white capitalize`}
                >
                    {name}
                </button>
            ))}
        </>
    )
}
