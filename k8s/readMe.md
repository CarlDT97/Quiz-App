# -------- Apply --------- #

kubectl apply -f mongodb-deployment.yaml
kubectl apply -f api-gateway-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f quiz-service-deployment.yaml
kubectl apply -f user-service-deployment.yaml
kubectl get pods
kubectl get services

# -------- Docker build and push --------- #

# Build images
cd api-gateway
docker build -t carldahlqvist/api-gateway .
cd ../frontend-service
docker build -t carldahlqvist/frontend-service .
cd ../quiz-service
docker build -t carldahlqvist/quiz-service .
cd ../user-service
docker build -t carldahlqvist/user-service .

# Push images
docker push carldahlqvist/api-gateway
docker push carldahlqvist/frontend-service
docker push carldahlqvist/quiz-service
docker push carldahlqvist/user-service