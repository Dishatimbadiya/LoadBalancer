package RoundRobin;

import java.util.ArrayList;
import java.util.List;


public class LoadBalancer {
    private int noOfServers;
    private int currIndex;
    private List<Server> serverList;

    LoadBalancer(int noOfServers) {
        this.noOfServers = noOfServers;
        this.serverList = new ArrayList<Server>();
        for(int i = 0; i < noOfServers; i++) {
            serverList.add(new Server(i+1));
        }
        currIndex = 0;
    }

    public void handleRequest(int requestId) {
        if (noOfServers == 0) {
            System.out.println("No servers available to handle the request: " + requestId);
            return;
        }

        int serverIndex = currIndex;

        while (serverList.get(currIndex).isBusy()) {
            currIndex = (currIndex + 1) % noOfServers;
            if (currIndex == serverIndex) {
                System.out.println("No servers available to handle the request: " + requestId);
                return;
            }
        }
        System.out.println("curr"+currIndex);
        serverList.get(currIndex).assignRequest(requestId);
        currIndex = (currIndex + 1) % noOfServers;
    }

}