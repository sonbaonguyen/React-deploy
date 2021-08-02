


const Post = ({img, title, desc, author, timePost}) => {
    var myImg = 'assets/images/blog/' + img;
    return (
        <div className="col">
            <div className="thumb-blog-overlay bg-white hover-text-PushUpBottom mb-4">
                <div className="post-image position-relative overlay-secondary">
                    <img src={myImg} alt="Image not found!" />
                    <div className="position-absolute xy-center">
                        <div className="overflow-hidden text-center">
                            <a className="text-white first-push-up transation font-large" href="#">+</a>
                        </div>
                    </div>
                </div>
                <div className="post-content p-35">
                    <h5 className="d-block font-400 mb-3"><a href="#" className="transation text-dark hover-text-primary">{title}</a></h5>
                    <p>{desc}</p>
                    <div className="post-meta text-uppercase">
                        <a href="#"><span>By {author}</span></a>
                        <a href="#"><span>{timePost}</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;