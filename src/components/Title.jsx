const Title = ({ title, source }) => {
    return (
        <section className="py-10 px-[10%] flex flex-col gap-3 items-center bg-slate-300">
            <h1 className="font-italiana text-5xl capitalize text-navy-green">{title}</h1>
            <p className="text-slate-600 capitalize font-medium">{source} / {title}</p>
        </section>
    );
};

const SubTitle = ({ title, source, subTitle }) => {
    return (
        <section className="py-10 px-[10%] flex flex-col gap-3 items-center bg-slate-300">
            <h1 className="font-italiana text-5xl capitalize text-navy-green">{title}</h1>
            <p className="text-slate-600 capitalize font-medium">{source} / {subTitle} / {title}</p>
        </section>
    );
};

// Named exports
export { Title, SubTitle };
