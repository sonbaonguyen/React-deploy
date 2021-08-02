import Post from "./Post";



const RecentPost = () => {
    return (
        <div className="full-row bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <span className="pb-2 d-table w-50 w-sm-100 text-primary m-auto text-center tagline">Our Recent Post</span>
                        <h2 className="down-line w-50 w-sm-100 mx-auto text-center mb-5">Publish What We Think, About Our Company Activities</h2>
                    </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
                    <Post img='1.png' title='Our latest development projects by more efficie.'  author='Robert Haven' timePost='Dec 25, 2019'
                    desc='Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.'></Post>
                    <Post img='2.png' title='Cultivating market leadership from the inside.'  author='Robert Haven' timePost='Dec 25, 2019'
                    desc='Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.'></Post>
                    <Post img='3.png' title='We are the next generation of the advertising.'  author='Robert Haven' timePost='Dec 25, 2019'
                    desc='Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.'></Post>
                </div>
            </div>
        </div>
    )
}

export default RecentPost;