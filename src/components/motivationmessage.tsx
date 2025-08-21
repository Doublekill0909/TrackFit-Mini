interface ContentProps {
    message: string;
    author: string;
}

export function MotivationalMessage(props: ContentProps){

    return(
        <main>
            <section>
                <div
                    style={{
                        backgroundColor: "#c499e0",
                        border: "2px solid #ccc",
                        color: "#fff",
                        fontWeight: "bold",
                        padding: 16
                    }}
                >
                    <h5>{props.message}</h5>
                    <p>{props.author}</p>
                </div>

            </section>

        </main>
    );  
}