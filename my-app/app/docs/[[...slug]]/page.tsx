export default function Docs({ params }: { params: { slug: string[] } }) {
    // console.log(params.slug,"oooooo"); // This will log the slug array to the console

    if (params.slug?.length === 3) {
        return (
            <h1>viewing docs for {params.slug[0]} and {params.slug[1]} and topic {params.slug[2]}</h1>
        );
    } else if (params.slug?.length === 1){return(<h1>
        viewing docs for "subject  "{params.slug[0]} and no topic.
    </h1>)}
    return (
        <div>
            <h1> Welcome to view optional catch-all-segment route</h1>
            {/* <p>Slug: {params.slug.join('/')}</p> */}
        </div>
    );
}