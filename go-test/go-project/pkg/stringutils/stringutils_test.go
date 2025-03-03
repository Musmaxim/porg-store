package stringutils

import "testing"

func TestRev(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		{name: "test 1",
			args: args{s: "hello"},
			want: "olleh",
		},
		{name: "test 2",
			args: args{s: "АБВ"},
			want: "ВБА"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Rev(tt.args.s); got != tt.want {
				t.Errorf("Rev() = %v, want %v", got, tt.want)
			}
		})
	}
}
