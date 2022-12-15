import Link from "next/link";
import React from "react";
import { MainLayout } from "../src/Layouts";

function ErroPage() {
  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="text-center">
          <h2 className="font-medium">
            Rất tiếc, trang này hiện không khả dụng.
          </h2>
          <p>
            Liên kết bạn theo dõi có thể bị hỏng hoặc trang này có thể đã bị gỡ.
            <Link href={"/"}> Quay lại Instagram.</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default ErroPage;
