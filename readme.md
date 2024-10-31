*   **Assignment: Build Something**
    

Quiz App is a web application designed for posting and discovering quizzes. Its purpose is to provide quiz enthusiasts with a centralized source for finding quizzes in their city, while also allowing quiz hosts, such as restaurants or event organizers, to share details about the location, theme, time, and other relevant information. The idea is to have a page where users can view upcoming quizzes, as well as the option to sign in and add new quizzes.


![System Overview](k8s/systemOverview.png)


The quiz application is built using microservices, comprising four core services and a database. The frontend service allows users to interact with the application's functionalities, such as viewing quizzes, creating quizzes, logging in and out, and creating accounts. The API Gateway manages traffic for various requests and can be expanded in the future to include additional routes to different microservices. For example, it will route user-related requests to the user service, which handles actions like logging in, logging out, and account creation. In future expansions, this user service may be connected to a separate database and handle other user-related behaviors. Similarly, the quiz service is responsible for processing quiz-related requests, such as retrieving and creating quizzes. Future versions of this service may include additional functionalities, like retrieving quizzes from different categories and accessing specific items.

The architectural design offers the benefit of allowing service expansion with minimal to no refactoring of other services. The routing/API Gateway manages additional services in the future and provides the front end with a single point of entry. This approach simplifies client-side logic and reduces the number of requests needed for interaction. Furthermore, the gateway can distribute incoming traffic across multiple instances of a service, enhancing both performance and availability.

From a security standpoint, the API Gateway serves as a secure buffer, concealing the internal microservices architecture and reducing exposure to direct attacks. It enforces centralized security policies, including authentication and authorization, ensuring that only verified users can access sensitive endpoints. The gateway also offers features such as throttling, rate limiting, and IP filtering, which help prevent abuse, denial-of-service (DoS) attacks, and unauthorized access. By logging all traffic centrally, the API Gateway facilitates effective monitoring and auditing, enabling the quick detection of anomalies while enhancing data privacy through protocol enforcement and encryption.

However, there are potential drawbacks, such as the risk of a single point of failure. The application is particularly vulnerable at the API Gateway; if it fails to scale or goes down, the entire application becomes unusable. While it can act as a performance bottleneck, this issue can be mitigated through horizontal scaling. Another advantage of this design is that it ensures a clear separation of concerns in communication between services. Additionally, the API Gateway’s security measures help contain failures, meaning that if one service goes down, it does not necessarily affect the entire system or expose other services to increased risk.