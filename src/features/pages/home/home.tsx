import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <>
            <div className="home-container" role="main">
                <Link
                    to={'/characters'}
                    className="material-symbols-outlined btn"
                    title="to Characters"
                >
                    person_add
                </Link>
            </div>
        </>
    );
}
