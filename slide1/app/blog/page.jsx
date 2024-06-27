import Link from 'next/link';

export default function Blog() {
    return (
        <>
            <h1>Bài viết mới</h1>
            <ul>
                <li>
                    <Link href="/Blog/1" legacyBehavior>
                        <a>Bài Viết 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Blog/2" legacyBehavior>
                        <a>Bài Viết 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Blog/3" legacyBehavior>
                        <a>Bài Viết 3</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Blog/4" legacyBehavior>
                        <a>Bài Viết 4</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Blog/5" legacyBehavior>
                        <a>Bài Viết 5</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}