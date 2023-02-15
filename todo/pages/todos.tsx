import { GetStaticProps } from "next";
import prisma from "../lib/prisma";
import Router from "next/router";
// import { TodoProps } from "../types/Todo";
import { Link } from "@chakra-ui/react";

const Todos = () => {
    return (
        <div>
            <div>todos一覧ページ</div>
            <Link href="/todos/create">todoを作成</Link>
        </div>
    );
};

export default Todos;
