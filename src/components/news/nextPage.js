export default function NextPage(props) {
    const { currentPage, totalPages, onClickNext } = props;

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onClickNext();
        }
    };

    return (
        <div>
            {currentPage < totalPages && (
                <button className="nextPage" onClick={goToNextPage}>
                    page {currentPage + 1}
                </button>
            )}
        </div>
    );
}
