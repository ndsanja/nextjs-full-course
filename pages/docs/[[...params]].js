import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h3>
        viewing docs for feature {params[0]} and conceps {params[1]}
      </h3>
    );
  } else if (params.length === 1) {
    return <h3>viewing docs for feature {params[0]}</h3>;
  }
  return (
    <div>
      <h2>Docs Home page</h2>
    </div>
  );
}
