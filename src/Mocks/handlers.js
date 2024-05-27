    import { http, HttpResponse } from 'msw';

    export const handlers = [
        http.post(
          "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
          async ({ request }) => {

            const bookingInfo = await request.json();
            console.log('Mock POST request:', bookingInfo);

            return HttpResponse.json(
              {
                active: true,
                when: "2024-05-31T12:10",
                lanes: "1",
                people: "2",
                shoes: ["42", "43"],
                id: "QWE123",
                price: 340,
              },
              { status: 201 }
            );
          }
        ),
      ];