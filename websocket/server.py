from websocket_server import WebsocketServer

# Called for every client connecting (after handshake)
def new_client(client, server):
	out = "New client%d connected " % client['id']
	server.send_message(client, "You're client%d" % client['id'])
	server.send_message_to_all(out)
	print(out)

# Called for every client disconnecting
def client_left(client, server):
	out = "Client(%d) disconnected" % client['id']
	server.send_message_to_all(out)
	print(out)

# Called when a client sends a message
def message_received(client, server, message):
	if len(message) > 200:
		message = message[:200]+'..'
	out = "Client(%d) said: %s" % (client['id'], message)
	server.send_message_to_all(out)
	print(out)

PORT=9001
server = WebsocketServer(PORT)
server.set_fn_new_client(new_client)
server.set_fn_client_left(client_left)
server.set_fn_message_received(message_received)
print("runnig...");
server.run_forever()
