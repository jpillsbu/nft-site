interface Mint {
    mint: any
    logOut: any
}

const startMining = (props: { action: Mint }) => {
    return (
        <div className="mintStart">
            <div onClick={props.action.mint} className="wallet">MINT</div>
            <div onClick={props.action.logOut} className="wallet">START OVER</div>
        </div>
    );
}

export default startMining