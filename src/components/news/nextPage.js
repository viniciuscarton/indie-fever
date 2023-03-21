import styles from './nextPage.css'

export default function NextPage(props) {
    return (
        <div>
            <button className="nextPage">
            Go to page {props.pageNumber}
            </button>
        </div>

    );
}