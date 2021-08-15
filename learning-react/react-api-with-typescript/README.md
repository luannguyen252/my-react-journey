```tsx
const fetchLocalData = () => {
  return axios
    .get(`http://localhost:5000/users`, {
      method: "GET",
      headers: "Access-Control-Allow-Origin",
    })
    .then((res) => {
      const { results } = res.data;
      console.log(results);
      return results;
    })
    .catch((err) => {
      console.error(err);
    });
};

...

const [localPeople, setLocalPeople] = useState([]);

...

useEffect(() => {
    fetchLocalData().then((apiLocalPeople) => {
      setLocalPeople(apiLocalPeople);
    });
  }, []);

```
