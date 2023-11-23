import useLoadingStore from "../store/loadingStore"
const Loading = () => {
    const { loading } = useLoadingStore()
    return (<>
        {loading && <>
            <div className="bg-loading">
                <div className="spinner-border text-light" style={{ width: '3rem', height: '3rem' }} role="status" />
            </div>
        </>}
    </>)
}
export default Loading