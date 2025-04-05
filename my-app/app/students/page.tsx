import Link from "next/link";

export default function StudentsName() {
    return (
        <div>
            <h1>Students Page</h1>
            <p>Welcome to the Students Page!</p>
            <Link href="/students/studentsName">Students Name Page</Link>
            
        </div>
    );
}