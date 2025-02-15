import { useEffect } from 'react';
export default function IndexPage() {
    useEffect(() => {
        async function getInfo() {
            const response = await fetch(
              "https://computing4charity-frontend-production.up.railway.app/api/user",
              {
                method: "POST",
                credentials: "include",
              },
            );
            const userInfo = await response.json();
            console.log(userInfo, "userinfo");
            setUserInfo(userInfo);
          }
          getInfo();
    })
    return <div>
        <p>Pog</p>

    </div>
}