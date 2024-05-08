import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import { getAllPosts } from "services/user";
import Loader from "components/modules/Loader";
import { getCategory } from "src/services/admin";

const style = { display: "flex" };

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
