export default function Docs({ params }: { params: { slug: string[] } }) {
    console.log(params.slug,"oooooo"); // This will log the slug array to the console

    if (params.slug.length === 2) {
        return (
            <h1>viewing docs for {params.slug[0]} and chapter {params.slug[1]}</h1>
        );
    }
    return (
        <div>
            <h1> Welcome to view catch-all-segment and optional catch-all-segment route</h1>
            {/* <p>Slug: {params.slug.join('/')}</p> */}
        </div>
    );
}