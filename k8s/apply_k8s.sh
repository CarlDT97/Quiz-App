#!/bin/bash
# Make sure it can run
# chmod +x apply_k8s.sh
# ///
# run script with : ./apply_k8s.sh


# Apply all services first
echo "Applying services..."
for service_file in services/*.yaml; do
  echo "Applying $service_file"
  kubectl apply -f "$service_file"
done

sleep 5

# Apply all deployments
echo "Applying deployments..."
for deployment_file in deployments/*.yaml; do
  echo "Applying $deployment_file"
  kubectl apply -f "$deployment_file"
done

echo "All resources have been applied."

echo "Get services and get pods."
kubectl get services
kubectl get pods
