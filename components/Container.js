export default function Container({ children, dataClass }) {
    return (
        <>
            <div className={dataClass? `p_container ${dataClass}`:`p_container`}>
                {children}
            </div>
        </>
    )
}