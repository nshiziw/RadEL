const Title = ({ title, source }) => {
    return (
        <section className="py-10 px-[10%]">
            <h1 className="text-rose-500">{title}</h1>
            <p>{source} / {title}</p>
        </section>
    );
};

const SubTitle = ({ title, source, subTitle }) => {
    return (
        <section className="py-10 px-[10%]">
            <h1 className="text-rose-500">{title}</h1>
            <p>{source} / {title} / {subTitle}</p>
        </section>
    );
};

// Named exports
export { Title, SubTitle };
