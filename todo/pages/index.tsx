import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <h1>
          <span>
            TODO!!!
          </span>
        </h1>
        <div>
          <p>さっそくTODOを追加!</p>
        </div>
        <div>
          <Link href="/todos">
              <span>こちらから</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
