import Link from "next/link";

const Create = () => {
    return (
        <div>
            <h1>TODO 新規作成</h1>
            <div>
                <Link href="/todos">戻る</Link>
            </div>
        </div>
    );
};

export default Create;
