module.exports = {
  submitText: async (req, res) => {
    const { text } = req.body;

    console.log(text);
    res.send({
      success: true,
      message: "Text input success",
      gif: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAC8CAMAAABmM0N+AAAAKlBMVEUPTY8AAAD/mf+ZmZn/zJn/AABmM///mQAAmf///////wAz/wD/M5n/mZk5QGBtAAACS0lEQVR4nO3a6XaCMBBA4Vrs4vb+r9sTKuI4GbIQCJJ7/7Ecmo/2BIn9+CAiIiIiIiIiIiIiKtLJVXsQdYLeYtBbDHqLQW+xhulERLvrNDRuid07nu+hQ2+KTrR+h5LVxqQFvT593TndjfZYsjl86CsFHXozdM3+zK0MH/oKbZy+5I3YHF0GfZEE3WZdXXIz4K9P/woEHTr096CHaLH0GFZ00BderYEOvQQ9pmERzrhfgl5kxS7H+hMI+nbo9jdw0OvRe0V3T/oVXZzbxfGhR9BDNOiRdPeDKtMngp5EP6iS6GL6lpyB5Kd36rxZ9MTf6tml6eehxuknLRa7KtLFSyv0ZLoYwegvQHdpujrlLekiP13/XS1PP8cE3aLnf5qDvnG6HI8YpaZf7VUqwxUR9Hx6lHXs4oLuo7tLW3TvLL8uXZRD9/M7m/7fE72/F/lqecuhQ8+mX2Iz6P5pTgX9PemGX9AnnmkuTe+fPfYN0Yeh55VmvfyKoL+M5fGGOtK9L63Qn/LMndOH69EF/1HsUkU0fdgDfSG6poWC/lTsF09vT9f3YIIuHnej4navi2w4/wYdemKJvm87D121U/rDL/89OGZZTtD1PKY2oEMvRA/RoBeh9+2UPvrthG0E2onzctXQm6Un0kKXa5MuBnhM6lUfbDYbOvTW6TOu1ChdTdOheXpms9nQW6WXCfqL2jhkXsHzSU3s3pq6Dzp06O3QZf5DKZfRu5cZ+8ygQ2+KTkREREREREREREREREREREREREREREREREREc/oDZB7l9JQmlv0AAAAASUVORK5CYII=",
    });
  },
};
